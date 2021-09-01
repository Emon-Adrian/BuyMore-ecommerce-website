/** @format */

import bcrypt from "bcryptjs";
const data = {
	users: [
		{
			name: "Edgar",
			email: "admin@example.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: true,
		},
		{
			name: "Ricky",
			email: "user@example.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: false,
		},
	],

	products: [
		{
			name: "Nike Slim Shirt",
			category: "Shirts",
			image: "/images/p1.jpg",
			price: 120,
			countInStock: 10,
			brand: "Nike",
			rating: 4.0,
			numReviews: 10,
			description: "High quality product",
		},
		{
			name: "Adidas Fit Shirt",
			category: "Shirts",
			image: "/images/p2.jpg",
			price: 220,
			countInStock: 20,
			brand: "Adidas",
			rating: 4.5,
			numReviews: 20,
			description: "High quality product",
		},
		{
			name: "Lacoste Free Shirt",
			category: "Shirts",
			image: "/images/p3.jpg",
			price: 180,
			countInStock: 0,
			brand: "Lacoste",
			rating: 4.0,
			numReviews: 30,
			description: "High quality product",
		},
		{
			name: "Nike Slim Pants",
			category: "Pants",
			image: "/images/p4.jpg",
			price: 100,
			countInStock: 15,
			brand: "Nike",
			rating: 4.0,
			numReviews: 50,
			description: "High quality product",
		},
		{
			name: "Puma Slim Pants",
			category: "Pants",
			image: "/images/p5.jpg",
			price: 98,
			countInStock: 12,
			brand: "Puma",
			rating: 3.0,
			numReviews: 18,
			description: "High quality product",
		},
		{
			name: "Adidas Slim Pants",
			category: "Pants",
			image: "/images/p6.jpg",
			price: 118,
			countInStock: 18,
			brand: "Adidas",
			rating: 3.9,
			numReviews: 15,
			description: "High quality product",
		},
	],
};

export default data;
