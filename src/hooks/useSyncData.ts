import { useEffect } from 'react'; import { useDispatch, useSelector } from 'react-redux'; import apiClient from '../api/client'; import { setData } from '../store/dataSlice';

/**

Sync Hook

Ensures web version is always up-to-date with Android app actions. */ export const useSyncData = () => { const dispatch = useDispatch();

useEffect(() => { const fetchData = async () => { try { const response = await apiClient.get('/user/data'); dispatch(setData(response.data)); } catch (error) { console.error('Sync failed', error); } };

fetchData();
// Real-time polling or WebSocket setup could go here
const interval = setInterval(fetchData, 30000);
return () => clearInterval(interval);


}, [dispatch]); };