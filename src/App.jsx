import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col ">
        <CalendarHeader />

        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col sm:flex-row flex-1">
            <Sidebar className="sm:w-1/4" />
            <Month month={currenMonth} className="sm:w-3/4 flex-1" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
