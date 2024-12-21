import EventTypeForm from "@/app/components/EventTypeForm";
import {EventTypeModel} from "@/models/EventType";
import mongoose from "mongoose";
type PageProps = {
  params: {
    id: string;
  };
};
export default async function EditEventTypePage({params}: PageProps) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const eventTypeDoc = await EventTypeModel.findOne({_id: params.id});
  
  return (
    <div>hello from edit page: {eventTypeDoc?.title}</div>
  );
}