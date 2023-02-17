import { Loader, Modal, Text, Stack } from '@mantine/core'
import { useQRCode } from 'next-qrcode'
import useSWR from 'swr'
import { ActivityClient } from '@/clients/activities'

interface QRPopupProps {
  visible: boolean
  onClose: () => void
  activityId: number
  activityName: string
}

function QRPopup({ visible, onClose, activityId, activityName }: QRPopupProps) {
  const { Canvas } = useQRCode()
  const { data, isLoading, error } = useSWR(
    {
      key: 'activity_QR',
      id: activityId,
    },
    ActivityClient.generateActivityQR
  )

  return (
    <Modal
      onClose={onClose}
      opened={visible}
      title={'Attendance QR Code'}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="relative flex flex-col bg-white rounded-lg p-8 z-20">
        <Stack align="center">
          <Text className="text-xl font-medium text-center mb-4">
            Scan this QR code to attend the event
          </Text>
          <Text size={35} color="blue" weight={500}>
            {activityName}
          </Text>
        </Stack>
        <div className="flex flex-row items-center justify-center m-auto w-full">
          {isLoading ? (
            <Loader size={25} />
          ) : (
            <Canvas
              text={'localhost:3000/club_activities/' + data ?? 'loading'}
              options={{
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                // color: {
                //   dark: '#010599FF',
                //   light: '#FFBF60FF',
                // },
              }}
            />
          )}
        </div>
      </div>
    </Modal>
  )
}

export default QRPopup
