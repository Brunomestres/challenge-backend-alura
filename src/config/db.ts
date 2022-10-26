import mongoose from 'mongoose'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:wTNM8dB4ML0EPPd1@cluster0.d4f1w.mongodb.net/?retryWrites=true&w=majority');
}