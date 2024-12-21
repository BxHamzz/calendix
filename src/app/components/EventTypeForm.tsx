'use client';
import TimeSelect from "@/app/components/TimeSelect";
import { BookingTimes, WeekdayName } from "@/libs/types";
import axios from "axios";
import clsx from "clsx";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const weekdaysNames:WeekdayName[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export default function EventTypeForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState(30);
    const [bookingTimes, setBookingTimes] = useState<BookingTimes>({});
    const router = useRouter();
    async function handleSubmit(ev: { preventDefault: () => void; }) {
        ev.preventDefault();
        const response =await axios.post('/api/event-types', {
           title, description, length, bookingTimes
        });
        if (response.data){
            router.push('/dashboard/event-types');
        }
    }
    function handleBookingTimeChange(
        day: WeekdayName, 
        val: string | boolean, 
        prop: 'from' | 'to' | 'active'
    ) {
         setBookingTimes(oldBookingTimes => {
            const newBookingTimes:BookingTimes = {...oldBookingTimes};
            if (!newBookingTimes[day]){
                newBookingTimes[day] = {from: '00:00', to:'00:00', active:false};
            }
            if (prop === 'from' || prop === 'to') {
                newBookingTimes[day]![prop] = val as string; // Assert string
              } else if (prop === 'active') {
                newBookingTimes[day]![prop] = val as boolean; // Assert boolean
              }
          
              return newBookingTimes;
            });
    }
    
    return(
        <form className="p-2 bg-gray-200 rounded-lg" onSubmit={handleSubmit} >
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
                    <div className="grid gap-2">
                        {weekdaysNames.map(day => {
    
                            const active = bookingTimes?.[day]?.active;
                            return (
                                <div className="grid grid-cols-2 gap-2 items-center">
                                     <label className="flex gap-1 !mb-0 !p-0">
                                        <input 
                                        type = "checkbox"
                                        value={1}
                                        checked={bookingTimes?.[day]?.active}
                                        onChange={ev => handleBookingTimeChange(day, ev.target.checked, 'active')}
                                        />
                                        {day}
                                    </label>
                                <div className={
                                    clsx(
                                        "inline-flex gap-2 items-center ml-2",
                                        active ? '' : 'opacity-40'
                                    )
                                }>
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
                                </div>
                            );
                        })}
                          
                  
                  </div>      
                </div>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="btn-blue !px-8">
                    Save
                </button>
            </div>
        </form>
    );
}