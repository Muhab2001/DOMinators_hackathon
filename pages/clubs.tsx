import ClubCard from '../components/ClubCard'
import SearchField from '../components/SearchField'
import { Timeline, Grid } from '@mantine/core'

function MyTimeline() {
  return (
    <Timeline active={99} bulletSize={24} lineWidth={2}>
      <Timeline.Item title="Regular item">First item</Timeline.Item>
      <Timeline.Item title="Works as expected"></Timeline.Item>
      <Timeline.Item title="Regular item">Third item</Timeline.Item>
    </Timeline>
  )
}
function ClubsList() {
  return (
    <>
      <div className="w-full h-full mt-6">
        <Grid className="pl-36 h-full w-full">
          <Grid.Col className="mb-3" span={10}>
            <SearchField />
          </Grid.Col>

          <Grid.Col span={10}>
            <Grid className="gap-y-7" justify="space-between">
              <Grid.Col span={4}>
                <ClubCard
                  className="h-1/3"
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  className="h-1/3"
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  className="h-1/3"
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="fkldsajflkdsjaf;lksdjfklajfkljsdklfjsdlkafjdskl;jfkldsjfalk;jsdf;lkjsdaklfjdsaklfjsda;lkjfdsklajfds;ajkfdsa;fjdas;kjfa;lskjfsda;klj"
                  activitiesCount={10}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <ClubCard
                  name="Computer Club"
                  codename="CC"
                  logo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  memberCount={40}
                  description="KFUPM Computer club"
                  activitiesCount={10}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={2}>
            <MyTimeline />
          </Grid.Col>
        </Grid>
      </div>
    </>
  )
}

export default ClubsList
