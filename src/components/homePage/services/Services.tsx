import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";
import { IService } from "../../../types/apiResponses";
import styles from "./Services.module.scss";

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
  const services: Array<IService> = [
    { name: "Training", id: 0, subServices: [] },
    { name: "Audit", id: 1, subServices: [] },
    { name: "Regulatory Compliance Mitigation", id: 2, subServices: [] },
    {
      name: "Remediation as per regulatory requirement",
      id: 3,
      subServices: [],
    },
    {
      name: "Project Handling",
      id: 4,
      subServices: [
        { name: "Green Field Sterile Facility", id: 0 },
        { name: "Brown Field", id: 1 },
      ],
    },
    { name: "Qualification and Validation", id: 5, subServices: [] },
    { name: "Process or Operational Excellation", id: 6, subServices: [] },
  ];
  // const [services, setServices] = React.useState<Array<IService>>([]);
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   axios
  //     .get<TServices>("/v1/services")
  //     .then(({ data: { data } }) => {
  //       setServices(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       // eslint-disable-next-line no-console
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="container">
      <h2 className={styles.title}>
        <Link to="/services" className={styles.link}>
          Services provided by us
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className={styles.link_icon}
          />
        </Link>
      </h2>

      <div className={styles.cont}>
        {services.map((service) => (
          <div
            key={service.id}
            className={`${styles.card} ${styles.card_filled}`}
          >
            <div className={styles.head}>
              <h3 className="h4">{service.name}</h3>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quae quibusdam laborum quasi ullam adipisci accusantium voluptas
              reiciendis at. Commodi officia, voluptate sit sapiente minus animi
              quasi necessitatibus sint ipsa.
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
      </div>
    </div>
  );
};

export default Services;
