import React, { useState, Fragment } from 'react'

import FullCalendar, { DaySeriesModel } from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { flushToDom } from '@fullcalendar/react/dist/vdom'

const key = 'AIzaSyCurE75SMg0CWiyUKPErU8aZ9S0UszqX9Q'; //process.env.GATSBY_CALENDAR_API_KEY
const GOOGLE_CALENDAR_ID = 'kkjgltm1bisr2eesnm0rnnu8is@group.calendar.google.com'

function TimeGridCalendar() {
  const [isFirstWeek, setIsFirstWeek] = useState(true)

  const handleDatesSet = info => {
    let [month, date, year] = info.start.toLocaleDateString('en-US').split('/')
    parseInt(date) < 13 ? setIsFirstWeek(true) : setIsFirstWeek(false)
  }



  function renderInnerContent(innerProps) {
    return (
      <div className="fc-event-main-frame">
        {innerProps.timeText && (
          <div className="fc-event-time">{innerProps.timeText}</div>
        )}
        <div className="fc-event-title-container">
          <div className="fc-event-title fc-sticky">
            {innerProps.event.title || <Fragment>&nbsp;</Fragment>}
          </div>
        </div>
      </div>
    )
  }

  const eventContent = info => {
    return (
      <Tooltip
        title={
          <Typography color="inherit">
            {info.event.extendedProps.description}
          </Typography>
        }
        arrow={true}
      >
        {renderInnerContent(info)}
      </Tooltip>
    )
  }

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    if (info.event.url) {
      window.open('https://signu.app/gcal-add');
    }
  }

  return (
    <div>
      {typeof window !== 'undefined' && FullCalendar && (
        <FullCalendar
          headerToolbar={{
            start: false,
            center: 'title',
            end: false,
          }}
          contentHeight={'auto'}
          fixedWeekCount={false}
          plugins={[timeGridPlugin, googleCalendarPlugin]}
          validRange={{
            start: '2021-09-04',
            end: '2021-09-10',
          }}
          googleCalendarApiKey={key}
          events={{
            googleCalendarId: GOOGLE_CALENDAR_ID,
          }}
          initialView="timeGrid" //originally timeGridWeek
          dayCount="6"
          duration="days:6"
          slotMinTime={isFirstWeek ? '11:30:00' : '17:00:00'}
          nowIndicator={true}
          allDaySlot={false}
          datesSet={handleDatesSet}
          eventContent={eventContent}
          eventClick={handleEventClick}
        />
      )}
    </div>
  )
}

export default TimeGridCalendar
