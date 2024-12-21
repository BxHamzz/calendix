export type FromTo = {
    from: string;
    to: string;
    active: boolean;
  };
  
  export type WeekdayName = 'monday' | 'tuesday'
    | 'wednesday' | 'thursday' | 'friday'
    | 'saturday' | 'sunday';
  
  //export type BookingTimes = {} | Record<WeekdayName, FromTo>;

  export type BookingTimes = {
    [key in WeekdayName]?: {
      from: string;
      to: string;
      active?: boolean;
    };
  };