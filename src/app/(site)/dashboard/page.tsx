'use client'
import DashboardNav from "@/app/components/DashboardNav";
import {FormEvent, useState} from "react";
import axios from "axios";

export default function DashboardPage() {
    const [username, setUsername] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [isError, setIsError] = useState(false);
    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        setIsSaved(false);
        setIsError(false);
        const response = await axios.put('/api/profile', {username});
        if(response.data) {
            setIsSaved(true);
        } else {
            setIsError(true);
        }
    }
    return(
      <div>
       <DashboardNav />
       <form 
          onSubmit={handleSubmit}
          className="max-w-xs mx-auto mt-8">
            {isSaved && (
                <p>Settings saved!</p>
            )}
            {isError && (
                <p>Error</p>
            )}
          <label>
            <span>Username</span>
            <input 
              type="text" value={username}
              onChange={ev => setUsername(ev.target.value)}
            />
            <div className="text-center mt-4">
                <button type="submit" className="btn-blue !px-8">
                    Save
                </button>
            </div>
          </label>
       </form>


      </div>
    );
}