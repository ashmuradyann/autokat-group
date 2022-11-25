import { useState, useEffect } from 'react'
import { updateCommentData, getCommentData } from '../../firebase/firebase'

import FormInput from '../form-input/form-input.component'
import CommentArea from '../form-input/comment-area.component'
import { Button } from '../button/button.styles'

import './comments.scss'
import Spinner from '../spinner/spinner.component'

const Comments = () => {

  const [commentData, setCommentData] = useState({
    name: "",
    comment: ""
  })
  const [commentsList, setCommentsList] = useState(null)

  useEffect(() => {
    getCommentData().then(res => setCommentsList(res.data().comments))
  }, [])

  const sendComment = () => {
    const id = Math.random()
    const date = (new Date()).toLocaleDateString('pt-PT').slice(0, 10).replaceAll("/", ".")

    setCommentsList(prev => [
      {
        id: id,
        name: commentData.name,
        comment: commentData.comment,
        date: date
      },
      ...prev
    ])
    updateCommentData([{
      id: id,
      name: commentData.name,
      comment: commentData.comment,
      date: date
    },
    ...commentsList
    ])
    setCommentData({
      name: "",
      comment: ""
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setCommentData({ ...commentData, [name]: value })
  }

  return (
    <div className="comments">
      <div className="comments-container">
        <div className="comments-list-wrapper">
          <h2>Отзывы</h2>
          <div className="comments-list">
            {commentsList ? commentsList?.map(({ name, comment, date }, i) => {
              return (
                <div className="comment" key={i}>
                  <div className="comment-header">
                    <h3>{name}</h3>
                    <p>{date}</p>
                  </div>
                  <div>
                    <p>{comment}</p>
                  </div>
                </div>
              )
            }) : <Spinner />}
          </div>
        </div>
        <div className="send-comment">
          <h2>Написать отзыв</h2>
          <FormInput name="name" label="Имя" value={commentData.name} onChange={handleChange} />
          <CommentArea name="comment" label="Ваш отзыв" value={commentData.comment} onChange={handleChange} />
          <Button disabled={commentData.name === "" || commentData.comment === ""} onClick={sendComment}>Отправить</Button>
        </div>
      </div>
    </div>
  )
}

export default Comments