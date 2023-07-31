import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CommentComponent = () => {
  const { t } = useTranslation();
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder={t('commentPlaceholder')}
      />
      <p>{t('translatedComment')}: {comment}</p>
    </div>
  );
};

export default CommentComponent;