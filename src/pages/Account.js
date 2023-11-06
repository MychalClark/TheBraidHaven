import "../css/account.css";
import { TbDoorExit } from "react-icons/tb";
function Account() {
  return (
    <div className="Account">
      <div className="d-grid gap-2">
        <button
          type="button"
          name=""
          id=""
          className="btn rounded-3 btn-danger "
        >
          <div className="passionFont">
            <TbDoorExit></TbDoorExit> Logout
          </div>
        </button>
      </div>
    </div>
  );
}
export default Account;
