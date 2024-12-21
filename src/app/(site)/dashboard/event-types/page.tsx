'use server'
import DashboardNav from "@/app/components/DashboardNav";
import {session} from "@/libs/session";
import {EventTypeModel} from "@/models/EventType";
import {Plus} from "lucide-react";
import mongoose from "mongoose";
import Link from "next/link";

export default async function EventTypesPage() {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const email = await session().get('email');
  const eventTypes = await EventTypeModel.find({email});
  return (
    <div>
      <div>
        <DashboardNav />
      <div className="mt-4 border border-b-0 rounded-xl overflow-hidden mb-4">
        {eventTypes.map(et => (
          <Link
            className="block p-2 border-b"
            href={'/dashboard/event-types/edit/'+et.id}>
            {et.title}
            </Link>
        ))}
      </div>
        </div>
      <Link className="btn-gray"
            href="/dashboard/event-types/new">
        <Plus size={16} />
        New event type
      </Link>
    </div>
  );
}
