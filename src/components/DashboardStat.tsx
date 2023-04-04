type Statistic = { img: string, title: string, value: string, style: string }

function DashboardStat(props: Statistic){
    const { img, title, value, style }: Statistic = props;

    return (
        <div className='p-7 bg-white rounded-md shadow-sm'>
            <div className={`${style} w-10 h-10 rounded-full flex items-center justify-center`}>
                <img src={img} alt="users icon" />
            </div>
            <p className='my-2 text-sm'>{title}</p>
            <h3 className="font-bold text-2xl">
            {value}
            </h3>
        </div>
    )
}

export default DashboardStat