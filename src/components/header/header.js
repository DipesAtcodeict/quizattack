import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './header.css';

export default class Header extends Component {

    createNotification = (type) => {

        return () => {
            const msgs = ["Come on keep going", "Is this too hard for you??", "Try not to google..Test yourself", "try harder"];
            switch (type) {
                case 'info':
                    // eslint-disable-next-line no-multi-str
                    NotificationManager.info(msgs[Math.floor(Math.random()*4)]);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
                default:
                    console.log('no noty')
            }
        };
    };

    render() {
        return (
            <div>
                <header >
                   <span onClick={this.createNotification('info')}> QUIZ - ATTACK</span>
                </header>

                <NotificationContainer />
            </div>
        )
    }
}




