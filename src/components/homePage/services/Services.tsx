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
    <div className="container">
      <h2 className={styles.title}>Services provided by us</h2>

      <div className={styles.cont}>
        {loading ? (
          <>
            <div className={`${styles.card} ${styles.card_filled}`}>
              <Loader width="100%" height={100} />
            </div>
            <div className={`${styles.card} ${styles.card_filled}`}>
              <Loader width="100%" height={100} />
            </div>
            <div className={`${styles.card} ${styles.card_filled}`}>
              <Loader width="100%" height={100} />
            </div>
            <div className={`${styles.card} ${styles.card_filled}`}>
              <Loader width="100%" height={100} />
            </div>
          </>
        ) : (
          <>
            {services.map((service) => (
              <div
                key={service._id}
                className={`${styles.card} ${styles.card_filled}`}
              >
                <div className={styles.head}>
                  <h3 className="h4">{service.name}</h3>
                </div>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quae quibusdam laborum quasi ullam adipisci accusantium
                  voluptas reiciendis at. Commodi officia, voluptate sit
                  sapiente minus animi quasi necessitatibus sint ipsa.
                </p>
                {!!service.subServices.length && (
                  <ul>
                    {service.subServices.map((subService) => (
                      <li>
                        <span>- </span>
                        <span>{subService.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {services.length % 2 !== 0 && <div className={styles.card} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
