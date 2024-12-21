
import mongoose, {Model} from 'mongoose';

const FromToSchema = new mongoose.Schema({
  from: String,
  to: String,
});

type FromTo = {
    from: string;
    to: string;
};

type WeekdayName = 'monday' | 'tuesday'
  | 'wednesday' | 'thursday' | 'friday' 
  | 'saturday'  | 'sunday';

type EventType = {
  email: string;
  title: string;
  description: string;
  length: number;
  bookingTimes: Record<WeekdayName, FromTo>;
  
}

const BookingSchema = new mongoose.Schema<Record<WeekdayName, FromTo>>({
  monday: FromToSchema,
  tuesday: FromToSchema,
  wednesday: FromToSchema,
  thursday: FromToSchema,
  friday: FromToSchema,
  saturday: FromToSchema,
  sunday: FromToSchema,
});

const EventTypeSchema = new mongoose.Schema<EventType>({
  email: String,
  title: String,
  description: String,
  length: Number,
  bookingTimes: BookingSchema,
}, {
  timestamps: true,
});

export const EventTypeModel = mongoose.models?.EventType || mongoose.model<EventType>('EventType', EventTypeSchema);