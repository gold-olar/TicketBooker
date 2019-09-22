# TicketBooker
API for Boking Tickets to all Kind of Events ..

# EndPoints
'/get-events' returns all available events (get)


*'/register/event'* to register events (post)
Body Should Contain
*{ title, organizer,banner, category, host, venue, avaialableSeats, date }*


*'/register/host'* to register eventhoster (post)
Body Should Contain
*{name, accountNumber, banknName,  email, password}*


*'/book'* to register eventhoster (post)
Body Should Contain
*{reference_no, event_id,  no_of_tickets, email, name}*

