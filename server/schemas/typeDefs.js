const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
  }

  type Order {
    _id: ID
    products: [Product]
  }

  type Product {
    _id: ID
    price: Float
    quantity: Int
    image: String
    name: String
    category: Category
    description: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Auth {
    token: ID,
    user: User
  }

  type Query {
    user: User, 
    products(category:ID, name:String): [Product]
    product(_id:ID!): Product
    order(_id:ID!): Order  
    categories: [Category]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }



`;

module.exports = typeDefs;
