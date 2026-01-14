import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color);
    
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-60 rounded-4xl'>
            <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard