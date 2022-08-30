import React from 'react'

const Company = () => {
  return (
    <div className='text-3xl bg-black text-white'>
      <h1 className='text-center'>Companies</h1>
      <div className="grid grid-cols-10 md:grid-cols-12 my-2">
      <div className='hidden md:contents'><div></div></div>
      <div className="col-span-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-1">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg"
                src="https://packitmoversfranchising.com/wp-content/uploads/2021/04/how-to-start-a-moving-company-3.jpg"
                alt=""
              />
            </div>
            <div className="p-1">
              <div>
                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                Movers and shakers
                </h5>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos, incidunt consectetur aspernatur, aliquid.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg"
                src="https://packitmoversfranchising.com/wp-content/uploads/2021/04/how-to-start-a-moving-company-3.jpg"
                alt=""
              />
            </div>
            <div className="p-1">
              <div>
                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                   Utahama Lini
                </h5>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos, incidunt consectetur aspernatur, aliquid.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg"
                src="https://packitmoversfranchising.com/wp-content/uploads/2021/04/how-to-start-a-moving-company-3.jpg"
                alt=""
              />
            </div>
            <div className="p-1">
              <div>
                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  Nyumbani Move
                </h5>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos, incidunt consectetur aspernatur, aliquid.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg"
                src="https://packitmoversfranchising.com/wp-content/uploads/2021/04/how-to-start-a-moving-company-3.jpg"
                alt=""
              />
            </div>
            <div className="p-1">
              <div>
                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  Ofisini Move
                </h5>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos, incidunt consectetur aspernatur, aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
      </div>
    

  )
}

export default Company