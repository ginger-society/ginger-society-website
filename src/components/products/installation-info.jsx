import { FaRegCopy } from "react-icons/fa";
import styles from './installation-info.module.scss';

const InstallationInfo = () => {
  const commandText = `bash -c "$(curl -fsSL https://raw.githubusercontent.com/ginger-society/infra-as-code-repo/main/rust-helpers/install-all-clis.sh)"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText).then(() => {
      alert("Command copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy command", err);
    });
  };

  return (
    <div className={styles.container}>
      <span>
        Get started by installing our dev tools. Copy the command below and paste it in your terminal (use sudo mode if needed).
      </span>
      <span className={styles.command}>
        <span className={styles.dollarSign}>$</span>
        <span className={styles.typedCommand}>{commandText}</span>
      </span>
      <span onClick={handleCopy} className={styles.copyButton}>
        Copy <FaRegCopy />
      </span>
    </div>
  );
};

export default InstallationInfo;
