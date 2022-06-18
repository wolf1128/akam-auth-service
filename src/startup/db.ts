import mongoose from 'mongoose';

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI_LOCAL as string);

		console.log(`MongoDB Connected`);
	} catch (error: any) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectToMongoDB;
