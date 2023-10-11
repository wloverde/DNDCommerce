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

  type Checkout {
    session: ID
  }


  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
  }

  type Query {
    user: User, 
    products(category:ID, name:String): [Product]
    product(_id:ID!): Product
    order(_id:ID!): Order  
    categories: [Category]
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }



`;

module.exports = typeDefs;
