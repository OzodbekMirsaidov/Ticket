const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./model");
const VenueTypeRout = require("./routes/vanueType.rout.js")
const VenueRout = require("./routes/venue.rout.js")
const venuePhotoRout = require("./routes/venuePhoto.rout")
const Region = require("./routes/region.rout.js")
const District = require("./routes/district.rout")
const Discount = require("./routes/discount.rout")
const Admin = require("./routes/admin.rout.js")
const Country = require("./routes/country.rout")
const Delivery = require("./routes/delivery.rout.js")
const SeatType = require("./routes/seatType.rout.js")
const Seat = require("./routes/seat.rout.js")
const HumanCategory = require("./routes/humanCategory.rout.js")
const EventType = require("./routes/eventType.rout")
const Event = require("./routes/event.rout")
const Language = require("./routes/language.rout")
const Status = require("./routes/status.rout")
const TicketType = require("./routes/ticketType.rout")
const Ticket = require("./routes/ticket.rout")
const FlatDto = require("./routes/flatdto.rout")
const SectorDto = require("./routes/sectordto.rout")
const Payment = require("./routes/payment.rout");
const Gender = require("./routes/gender.rout");
const Customer = require("./routes/customer.rout");
const CustomerAddress = require("./routes/customerAddress.rout");
const CustomerCard = require("./routes/customerCard.rout");
const Booking = require("./routes/booking.rout");
const Cart = require("./routes/cart.rout");
const setupSwagger = require("./swagger/swagger");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", VenueTypeRout);
app.use("/api", VenueRout);
app.use("/api", venuePhotoRout);
app.use("/api", Region);
app.use("/api", District);
app.use("/api", Admin);
app.use("/api", Country);
app.use("/api", Delivery);
app.use("/api", Discount);
app.use("/api", SeatType);
app.use("/api", Seat);
app.use("/api", HumanCategory);
app.use("/api", EventType);
app.use("/api", Event);
app.use("/api", Language);
app.use("/api", Status);
app.use("/api", TicketType);
app.use("/api", Ticket);
app.use("/api", FlatDto);
app.use("/api", SectorDto);
app.use("/api", Payment);
app.use("/api", Gender);
app.use("/api", Customer);
app.use("/api", CustomerAddress);
app.use("/api", CustomerCard);
app.use("/api", Booking);
app.use("/api", Cart);


setupSwagger(app);

const PORT = process.env.PORT || 3000;


sequelize.sync().then(() => {
    console.log(sequelize.models);
    app.listen(PORT, () => {
        console.log(`Serverv is running on port ${PORT}`);
    });
});
