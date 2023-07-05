import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';
import { Comment } from '@/entities/Comment';
import { getUserId } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addArticleComment',
  async (text, {
    extra, rejectWithValue, getState, dispatch,
  }) => {
    try {
      const userId = getUserId(getState());
      const articleId = getArticleDetailsData(getState())?.id;

      if (!userId || !text || !articleId) {
        return rejectWithValue('Incorrect data');
      }

      const response = await extra.api.post<Comment>('/comments', {
        userId,
        articleId,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (err) {
      return rejectWithValue('Credentials are incorrect');
    }
  },
);
