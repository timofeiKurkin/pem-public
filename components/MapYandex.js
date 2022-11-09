import {YMaps, Map, Placemark, ZoomControl, FullscreenControl} from "@pbe/react-yandex-maps";

const MapYandex = ({}) => {
	const position = [53.85283540740859,87.19996848368186]

	return (
		<YMaps query={{load: 'control.ZoomControl'}}>
			<Map defaultState={{
				center: position,
				zoom: 17
			}}
				 className={'myMaps'}
				 // onLoad={(ymaps) => console.log(ymaps)}
			>
				<Placemark
					modules={['geoObject.addon.balloon']}
					geometry={position}
					properties={{ balloonContentBody: 'ПромЭлектроМонтаж' }}
				/>
				<ZoomControl options={{
					float: 'right'
				}}/>
				<FullscreenControl/>
			</Map>
		</YMaps>
	);
};

export default MapYandex;