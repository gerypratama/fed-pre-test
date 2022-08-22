const Activities = () => {
  const activities = [
    {
      id: 1,
      feed: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
      day: "Hari ini",
      time: "06:00"
    },
    {
      id: 2,
      feed: "Bintang baru saja menghabus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet",
      day: "Kemarin",
      time: "17:32"
    },
    {
      id: 3,
      feed: "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
      day: "Kemarin",
      time: "17:32"
    },
    
  ];

  return (
    <section className="flex flex-col justify-between items-start p-3 bg-white rounded shadow sm:w-full lg:w-[48.5%] mb-3">
      <h2 className="text-sm font-semibold">Aktivitas</h2>
      <div className="flex flex-col w-full mb-3 justify-between items-start">
        {activities.map((item) => {
          return (
            <div key={item.id} className="flex flex-col justify-center items-start w-full my-2 text-xs">
              <p>{item.feed}</p>
              <p className="text-gray-400 font-light">{`${item.day}, ${item.time}`}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
