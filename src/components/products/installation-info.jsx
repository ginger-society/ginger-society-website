import { FaRegCopy } from "react-icons/fa";
import styles from './installation-info.module.scss';

const InstallationInfo = () => {
  const commandText = `bash -c "$(curl -fsSL https://raw.githubusercontent.com/ginger-society/infra-as-code-repo/main/rust-helpers/install-all-clis.sh)"`;

  return (
    <div className={styles.container}>
      <span>
        Get started by installing our dev tools. Copy the command below and paste it in your terminal (use sudo mode if needed).
      </span>
      <span className={styles.command}>
        <span className={styles.dollarSign}>$</span>
        <span className={styles.typedCommand}>{commandText}</span>
      </span>

    </div>
  );
};

export default InstallationInfo;
