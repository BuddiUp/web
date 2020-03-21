import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactFilestack from 'filestack-react';
import testFace from '../../assets/images/testFace.jpg';
import { device } from '../../theme';

const UploadContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${device.mobileL} {
        margin-top: 7px;
    }
`;

const UserImage = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 8px;
    margin-right: 8px;
    object-fit: cover;
    background-color: ${(props) => props.theme.gray500};
`;

const UploadBtn = styled.button`
    padding: 8px 15px;
    height: max-content;
    cursor: pointer;
    font-size: 15px;
    border-radius: 8px;
    margin-left: 4px;
    color: ${(props) => props.theme.gray800};
    outline: none;
    box-shadow: 0 0 0 1pt ${(props) => (props.error ? props.theme.error : '#d8d8d8')}
        inset;
    background-color: ${(props) => props.theme.gray300};

    &:hover {
        opacity: 0.8;
        outline: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
        box-shadow: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
    }

    &:focus {
        outline: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
        box-shadow: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
    }
`;

const FILESTACK_API = process.env.REACT_APP_FILESTACK_API;

const Filestack = ({ profile_img }) => {
    return (
        <ReactFilestack
            apikey={FILESTACK_API}
            customRender={({ onPick }) => (
                <UploadContainer>
                    <UserImage src={profile_img} />
                    <UploadBtn onClick={onPick} type='submit'>
                        Change
                    </UploadBtn>
                </UploadContainer>
            )}
            onSuccess={(res) => console.log(res.filesUploaded[0].url)}
            onError={(res) =>
                console.log('Something went wrong during photo upload!', res)
            }
        />
    );
};

Filestack.propTypes = {
    profile_img: PropTypes.string.isRequired
};

export default Filestack;
