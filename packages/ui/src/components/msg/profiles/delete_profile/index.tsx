import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgDeleteProfile } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const DeleteProfile: FC<{ message: MsgDeleteProfile }> = (props) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);
  const creatorMoniker = creator ? creator?.name : message.creator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDeleteProfileContent"
        components={[<Name address={message.creator} name={creatorMoniker} />]}
      />
    </Typography>
  );
};

export default DeleteProfile;
