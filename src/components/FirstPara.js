import React from 'react';
import { RichText } from 'prismic-reactjs';

const FirstParagraph = ({ sliceZone, textLimit = 300 }) => {
    const firstTextSlice = sliceZone.find(slice => slice.slice_type === 'text');

    console.log(firstTextSlice)
    if (firstTextSlice) {
        const text = RichText.asText(firstTextSlice.primary.text);
        let limitedText = text.substring(0, textLimit);

        if (text.length > textLimit) {
            limitedText = `${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`;
        }

        return <p style={{
            color: '#999',
            lineHeight: 1.5,
        }}>{limitedText}</p>;
    }

    return null;
};

export default FirstParagraph;