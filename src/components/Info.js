import React from 'react';
import InfoBlock from './InfoBlock';

function Info() {
  return (
		<section className='App-info'>
			<InfoBlock value='3' text='Years Of Expirience' />
			<p className='App-info-block' />
			<InfoBlock value='1K' text='Success Projects' />
			<p className='App-info-block' />
			<InfoBlock value='256' text='Active Projects' />
			<p className='App-info-block' />
			<InfoBlock value='90%' text='Happy Customers' />
		</section>
	);
};

export default Info;
