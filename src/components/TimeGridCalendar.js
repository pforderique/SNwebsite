import React, { useState, Fragment } from 'react'

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const key = process.env.GATSBY_CALENDAR_API_KEY
const GOOGLE_CALENDAR_ID =
  'akgs00sgh4f7fjsugd8q1cjcm0@group.calendar.google.com'

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

  return (
    <div>
      {typeof window !== 'undefined' && FullCalendar && (
        <FullCalendar
          headerToolbar={{
            start: 'timeGridDay,timeGridWeek',
            center: 'title',
            end: 'prev,next',
          }}
          contentHeight={'auto'}
          fixedWeekCount={false}
          firstDay="6"
          plugins={[timeGridPlugin, googleCalendarPlugin]}
          validRange={{
            start: '2021-02-06',
            end: '2021-02-20',
          }}
          googleCalendarApiKey={key}
          events={{
            googleCalendarId: GOOGLE_CALENDAR_ID,
          }}
          initialView="timeGridWeek"
          slotMinTime={isFirstWeek ? '10:00:00' : '17:00:00'}
          nowIndicator={true}
          allDaySlot={false}
          datesSet={handleDatesSet}
          eventContent={eventContent}
        />
      )}
    </div>
  )
}

export default TimeGridCalendar
