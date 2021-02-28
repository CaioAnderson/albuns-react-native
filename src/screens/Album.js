import React from 'react';
import Modal from '../components/Modal';

export default function DetailAlbum(props) {
    const { album } = props.route.params;

    return <Modal album={album} />
};
