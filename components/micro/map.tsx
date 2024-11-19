import React from "react";
import Link from "next/link";


function Maps() {
    return(
        <Link href='https://www.google.com/maps/@-7.0953262,111.1403563,3a,75y,75.95h,75.77t/data=!3m6!1e1!3m4!1siyxD0x7gK0kwnczgXxaHRg!2e0!7i16384!8i8192?entry=ttu'>
            <iframe
                className="w-full min-h-[32rem]"
                src="https://maps.google.com/maps?q=PT.+Tani+Solusi+Berjaya+Utama&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen/>
        </Link>
    )
}

export default Maps;
