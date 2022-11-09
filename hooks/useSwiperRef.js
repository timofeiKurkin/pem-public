import {useState, useRef, useEffect} from 'react';

const UseSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null)
    const ref = useRef(null)

    useEffect(() => {
        setWrapper(ref.current)
    }, [ref, wrapper])

    return [
        wrapper,
        ref
    ]
};

export default UseSwiperRef;