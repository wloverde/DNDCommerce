const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async (parent, { category, name }) => {
            const params = {};
            if (category) {
                params.category = category;
            }
            if (name) {
                params.name = {
                    $regex: name
                };
            }
            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                    .populate({
                        path: 'orders.products',
                        populate: 'category'
                    });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                    .populate({
                        path: 'orders.products',
                        populate: 'category'
                    });

                return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            // mao through the list of products sent by the client to extract the ids of each item and create a new order
            await Order.create({ products: args.products.map(({_id}) =>
                _id )});
                for (const product of args.products) {
                    line_items.push({
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product.name,
                                description: product.description,
                                images: [`${url}/images/${product.image}`],
                            },
                            unit_amount: product.price * 100,
                        },
                        quantity: product.purchaseQuantity,
                    });
                }
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items,
                    mode: 'payment',
                    success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${url}/`,
                });
                return {session: session.id};

    }, Mutation: {

    }
}