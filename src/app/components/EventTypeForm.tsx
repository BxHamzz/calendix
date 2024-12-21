'use client';
import TimeSelect from "@/app/components/TimeSelect";
import { BookingTimes, WeekdayName } from "@/libs/types";
import { useState } from "react";

const weekdaysNames:WeekdayName[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export default function EventTypeForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState(30);
    const [bookingTimes, setBookingTimes] = useState<BookingTimes>({});
    function handleBookingTimeChange(
        day: WeekdayName, 
        val: string, 
        fromOrTo: 'from' | 'to'
    ) {
         setBookingTimes(oldBookingTimes => {
            const newBookingTimes:BookingTimes = {...oldBookingTimes};
            if (!newBookingTimes[day]){
                newBookingTimes[day] = {from: '00:00', to:'00:00'};
            }
            newBookingTimes[day][fromOrTo] = val;
            return newBookingTimes;
         });
    }
    
    return(
        <form className="p-2 bg-gray-200 rounded-lg">
            create new event type:
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label>
            <span>title</span>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={ev => setTitle(ev.target.value)} />
          </label>
          <label>
            <span>description</span>
            <textarea
              placeholder="description"
              value={description}
              onChange={ev => setDescription(ev.target.value)}
            />
          </label>
          <label>
            <span>event length (minutes)</span>
            <input
              type="number"
              placeholder="30"
              value={length}
              onChange={ev => setLength(parseInt(ev.target.value))}
            />
          </label>
                </div>
                <div>
                    <span className="label">availability</span>
                    <div className="grid grid-cols-2 gap-2 items-center">
                        {weekdaysNames.map(day => (
                            <>
                              {day}
                              <div className="inline-flex gap-2 items-center ml-2">
                              <TimeSelect
                                value={bookingTimes?.[day]?.from || '00:00'}
                                onChange={val => handleBookingTimeChange(day, val, 'from')}
                                step={30}/>
                            <span>-</span>
                                <TimeSelect
                                    value={bookingTimes?.[day]?.to || '00:00'}
                                    onChange={val => handleBookingTimeChange(day, val, 'to')}
                                    step={30}/>
                              </div>
                            </>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="btn-blue !px-8">
                    Save
                </button>
            </div>
        </form>
    );
}