import { FaRegCopy, FaTerminal } from "react-icons/fa";

const InstallationInfo = () => {

  const handleCopy = () => {
    const command = `bash -c "$(curl -fsSL https://raw.githubusercontent.com/ginger-society/infra-as-code-repo/main/rust-helpers/install-all-clis.sh)"`;
    navigator.clipboard.writeText(command).then(() => {
      alert("Command copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy command", err);
    });
  }

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        gap: '20px',
        flexDirection: 'column',
        color: "white",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <span>Get started by installing our dev tools, Copy the command below and paste it in your terminal ( use sudo mode if needed ) </span>
      <span style={{ margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', fontSize: '18px', border: 'solid 0.5px white', padding: '20px', borderRadius: '20px' }}>
        <span style={{ color: '#e53b2a' }}>$</span> bash -c "$(curl -fsSL
        https://raw.githubusercontent.com/ginger-society/infra-as-code-repo/main/rust-helpers/install-all-clis.sh)"  </span>
      <span onClick={handleCopy} style={{ fontSize: '15px', cursor: 'pointer' }}>Copy <FaRegCopy /></span>

    </div>
  );
};

export default InstallationInfo;
