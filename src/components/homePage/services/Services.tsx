import * as React from "react";
import { IService } from "../../../types/apiResponses";
import { IResponse } from "../../../types/genericTypes";
import axios from "../../../utils/axios";
import Loader from "../../generic/loader/Loader";
import styles from "./Services.module.scss";

interface ServicesProps {}

type TServices = IResponse<Array<IService>>;

const Services: React.FunctionComponent<ServicesProps> = () => {
  const [services, setServices] = React.useState<Array<IService>>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get<TServices>("/v1/services")
      .then(({ data: { data } }) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`${styles.cont} container`}>
      {loading ? (
        <>
          <div className={styles.loading}>
            <Loader width="calc(50% - 10px)" height={100} />
            <span className={styles.spacer} />
            <Loader width="calc(50% - 10px)" height={100} />
          </div>
          <div className={styles.loading}>
            <Loader width="calc(50% - 10px)" height={100} />
          </div>
        </>
      ) : (
        services.map((service) => <p key={service._id}>{service.name}</p>)
      )}
    </div>
  );
};

export default Services;
