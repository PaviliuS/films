import React from 'react';
import { useFormik } from 'formik';
import * as Style from './Style';
import { VscComment } from "react-icons/vsc";
import * as yup from 'yup';

const validationSchema = yup.object({
    comment: yup
        .string('Write your comment')
        .required('Required').max(250,'Max length'),
});

const CommentForm = (props) => {
  
    const formik = useFormik({
        initialValues: {
            comment: '',
        },
        validationSchema: validationSchema,

        onSubmit: values => {
            let comment={
                text:values.comment,
                filmId: props.filmId,

            }
            values.comment = '';
            props.setComment(comment)
          
        }
    }
    );

    return (
        <Style.Form onSubmit={formik.handleSubmit}>
            <Style.Item>
                <Style.Icon><VscComment/></Style.Icon>
                <Style.TextArea
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                    placeholder={'Write your comment'}
                    
                />
                {formik.touched.comment && Boolean(formik.errors.comment) ? <Style.Error>{formik.errors.comment}</Style.Error> : ''}
            </Style.Item>

            <Style.Button type="submit" >Answer</Style.Button>
        </Style.Form>
    );
};

export default CommentForm;