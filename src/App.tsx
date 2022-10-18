import React from 'react';

import CalendarOfEvents from './components/CalendarOfEvents';
import RecentUpdates from './components/RecentUpdates';
import Layout from './layout/Layout';
import LinkPanel from './components/LinkPanel';
import ServicePanel from './components/ServicePanel';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MoveScrollTop from './components/MoveScrollTop';
import { getEvents, getBlogs } from './helpers/serviceData';
import { BlogType, EventType } from './helpers/types';

function App() {

  const [showBackButton, setShowBackButton] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<EventType[]>([]);
  const [blogs, setBlogs] = React.useState<BlogType[]>([]);

  React.useEffect(() => {
    const events: EventType[] = getEvents();
    const blogs: BlogType[] = getBlogs();
    setEvents(events);
    setBlogs(blogs);
  }, [])

  return (
    <Layout handler={setShowBackButton}>
      <Banner></Banner>
      <ServicePanel></ServicePanel>
      <LinkPanel></LinkPanel>
      <div className='flex w-full max-w-screen-xl justify-around flex-wrap'>
        <RecentUpdates blogs={blogs}></RecentUpdates>
        <CalendarOfEvents events={events}></CalendarOfEvents>
      </div>
      <Footer></Footer>
      <MoveScrollTop show={showBackButton}></MoveScrollTop>
    </Layout>
  );
}

export default App;
