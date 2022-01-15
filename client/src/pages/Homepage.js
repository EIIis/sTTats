import React from 'react'

import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup'

import { css, StyleSheet } from 'aphrodite';

function Homepage(){
    return(
        <div>
        <Alert variant="success">
            <Alert.Heading>Update 0.1</Alert.Heading>
            <p>
            Hi and welcome to sTTats! We're here to help you take a deeper look into your TikTok account. We're currently in the
            process of builing the website along with the backend which will actually be the thing that will parse your information.
            To know a little more about the service, please check out the 'About' section of the page!
            </p>
            <hr />
            <p className="mb-0">
            If you have any suggestions, feel free to create an issue on our Github page or you can contact me on my contact page!
            </p>
        </Alert>

        <div className={css(styles.listContainer)}>
            <ListGroup as='ol' numbered>
                <ListGroup.Item as='li'>
                    as='li' as='li' as='li'as='li 'as='li'vvvas='li' as='li'vas='li'useDebugValue(as=' li')vvas='li'vas ='li'vas='li' as='li'v
                    as='li'vvvas='li'
                </ListGroup.Item>
                <ListGroup.Item as='li'>
                    as='li'
                </ListGroup.Item>
            </ListGroup>
        </div>

        </div>
        
        

    );
}

const styles = StyleSheet.create({
    listContainer: {
        margin: '0 auto',
        width: '80%',
        paddingTop: '40px',
    },
  
  
  });

export default Homepage;