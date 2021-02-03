import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';



function MonthCalendar(){

    return (
        <FullCalendar
            headerToolbar={{
                start: 'title',
                center: '',
                end: ''
            }}
            contentHeight={'auto'}
            fixedWeekCount={false}
            firstDay='6' 
            duration={{ days: 15 }} 
            plugins={[ dayGridPlugin, googleCalendarPlugin ]}
            initialView="dayGridMonth"
            
            validRange={{
                start: '2021-02-06',
                end: '2021-02-20'
            }}
            googleCalendarApiKey={key}
            events={{ 
                googleCalendarId: GOOGLE_CALENDAR_ID
            }}
            expandRows={true}
            showNonCurrentDates={false}
        />
    );
}

export default MonthCalendar