import React,{useState} from 'react'
import classNames from "classnames";
import { FaPowerOff } from 'react-icons/fa'


const UserDashboard = () => {

    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-gray-800 text-white flex justify-between flex-col",
        {
          ["w-80"]: !toggleCollapse,
          ["w-20"]: toggleCollapse,
        }
      )
    
      const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute right-0",
        {
          "rotate-180": toggleCollapse,
        }
      )

      const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
      };
    
      const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
      };

  return (
    
    <div
    className={wrapperClasses}
    onMouseEnter={onMouseOver}
    onMouseLeave={onMouseOver}
    style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
  >
    <div className="flex flex-col">
      <div className="flex items-center justify-between relative">
        <div className="flex items-center pl-1 gap-4">
            <button>Close</button>
          <span
            className={classNames("mt-2 text-lg font-medium text-text", {
              hidden: toggleCollapse,
            })}
          >
            Logo
          </span>
        </div>
        {isCollapsible && (
          <button
            className={collapseIconClasses}
            onClick={handleSidebarToggle}
          >
            open
          </button>
        )}
      </div>      
    </div>

    <div className='px-3 py-4'>
      <div style={{ width: "2.5rem" }}>
        <FaPowerOff />
      </div>
      {!toggleCollapse && (
        <span className={classNames("text-md font-medium text-text-light")}>
          Logout
        </span>
      )}
    </div>
  </div>
  )
}

export default UserDashboard