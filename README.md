# Meetings App

An app for viewing conference room reservations and upcoming meetings for the given day and given conference room.

The meetings data is read from a JSON file. For demo purposes the app ignores the date information and displays the meetings as if they were booked for today.

[View Demo](https://mmkari.github.io/meetings-app/)

Assumptions:

- data uses ISO-8859-1 character encoding (gets decoded in client into UTF-8)
- meeting data is in chronological order and doesn't overlap with each other
