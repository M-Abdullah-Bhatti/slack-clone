import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FiberManualRecord } from '@material-ui/icons';
import { Create } from '@material-ui/icons';
import SidebarOption from './SidebarOption';
import { InsertComment } from '@material-ui/icons';
import { Inbox } from '@material-ui/icons';
import { Drafts } from '@material-ui/icons';
import { BookmarkBorder } from '@material-ui/icons';
import { PeopleAlt } from '@material-ui/icons';
import { Apps } from '@material-ui/icons';

import { FileCopy } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';
import { ExpandMore } from '@material-ui/icons';
import { Add } from '@material-ui/icons';

import db from './firebase';
import { useStateValue } from './StateProvider';




function Sidebar() {

    const[{user}]=useStateValue();
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ))

    }, [])


    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </div>
                <Create />
            </div>


            <SidebarOption Icon={InsertComment} title="Thread" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Show more" />
            <hr />
            <SidebarOption Icon={Add}  addChannelOption title="Add channel" />

            {/* Connect db to all the channels */}

            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar