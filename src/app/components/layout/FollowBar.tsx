const FollowBar = () => {
  return (
    <div className='px-6 py-4 hidden lg:block'>
      <div className='bg-neutral-800 rounded-xl p-4'>
        <h2 className='text-white text-xl font-semibold'>Who to follow</h2>
        <div className='flex flex-col gap-6 mt-4'>
          {/* TODO: Render people to follow */}

          <div className='flex flex-row gap-4'>
            {/* <Avatar userId={user.id} /> */}
            <div className='flex flex-col'>
              <p className='text-white font-semibold text-sm'>Saman</p>
              <p className='text-neutral-400 text-sm'>@username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
