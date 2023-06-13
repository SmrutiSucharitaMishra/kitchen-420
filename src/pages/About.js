import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          A restaurant is an establishment that prepares and serves food and
          beverages to customers. It is a place where people can dine in and
          enjoy a meal. Restaurants vary in terms of cuisine, ambiance, service,
          and pricing. Here are some common features and aspects of restaurants:
          Menu: Restaurants offer a menu that lists the available food and
          beverage options. The menu typically includes appetizers, main
          courses, desserts, and drinks. Some restaurants specialize in specific
          types of cuisine, such as Italian, Chinese, Mexican, or Indian. Dining
          Options: Restaurants may provide various dining options, including
          indoor seating, outdoor seating, private dining rooms for events or
          parties, and sometimes even drive-thru or takeout services. Ambiance:
          The ambiance of a restaurant refers to its overall atmosphere and
          decor. Some restaurants have a formal and elegant setting, while
          others have a more casual and relaxed atmosphere. The ambiance can be
          influenced by factors such as lighting, music, furniture, and interior
          design. Service: Restaurants employ staff members, including servers,
          chefs, and kitchen staff, to provide customer service. The quality of
          service can greatly impact the dining experience, with attentive and
          friendly staff contributing to a positive experience. Price Range:
          Restaurants offer a range of pricing options, from budget-friendly
          establishments to high-end fine dining restaurants. The cost of a meal
          can vary based on factors such as the type of cuisine, location, and
          the overall dining experience. Reservation: Some restaurants accept
          reservations, allowing customers to secure a table in advance. This
          can be particularly useful for popular restaurants or during busy
          times. Special Dietary Needs: Many restaurants offer options for
          individuals with specific dietary requirements, such as vegetarian,
          vegan, gluten-free, or allergy-friendly menus. It's always a good idea
          to check with the restaurant beforehand to ensure they can accommodate
          your needs. Reviews and Ratings: Before visiting a restaurant, you can
          often find reviews and ratings online. Websites and apps like Yelp,
          Google Maps, or TripAdvisor provide feedback from previous customers,
          helping you make an informed decision about where to dine. Remember
          that the specific features and services offered by a restaurant can
          vary. It's always a good idea to check the restaurant's website or
          contact them directly for accurate and up-to-date information about
          their offerings.
        </p>
        <br />
        <p>
          It is an establishment where people can enjoy prepared meals
          and beverages in exchange for payment. Restaurants vary in terms of
          cuisine, ambiance, and service style. They provide a convenient and
          social dining experience for individuals, families, and groups.
          Restaurants may specialize in specific types of cuisine, such as
          Italian, Chinese, or Mexican, while others offer a diverse menu with a
          range of options. The atmosphere and decor of a restaurant can vary,
          from casual and relaxed to elegant and formal. Customers can expect to
          be served by waitstaff who take orders, deliver food and beverages,
          and provide assistance throughout the dining experience. Overall,
          restaurants play a significant role in culinary culture, offering a
          place for people to gather, celebrate, and enjoy delicious food.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
