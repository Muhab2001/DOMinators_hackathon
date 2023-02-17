import { useState } from 'react'
import {
  createStyles,
  Navbar,
  Group,
  Code,
  Avatar,
  Text,
  Divider,
  Box,
} from '@mantine/core'
import { Activity, Icon, Moneybag, Stack, Users } from 'tabler-icons-react'
import Link from 'next/link'
import { useClub } from '@/stores/club'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon')
  return {
    navbar: {
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
      position: 'fixed',
      left: 0,
      zIndex: 1,
    },

    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      ),
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      )}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      )}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      marginBottom: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background!,
          0.1
        ),
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background!,
          0.15
        ),
        [`& .${icon}`]: {
          opacity: 0.9,
        },
      },
    },
  }
})

export function AppNavbar() {
  const { classes, cx } = useStyles()

  const { name, logo, activePage, switchPage, codename } = useClub((state) => ({
    name: state.name,
    logo: state.logo,
    activePage: state.activePage,
    switchPage: state.switchPage,
    codename: state.codename,
  }))
  const data = [
    {
      link: 'club_activities/' + codename,
      label: 'Activities',
      icon: Activity,
    },
    // { link: '', label: 'Finance', icon: Moneybag },
    { link: 'members/' + codename, label: 'Members', icon: Users },
  ]

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === activePage,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        switchPage(item.label)
      }}
    >
      <item.icon size={16} className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section p={12} mb={4}>
        <Group spacing={8}>
          <Avatar size={'md'} radius={'xl'} src={logo} />
          <Text size={25} weight={700} color="white">
            {name}
          </Text>
        </Group>
      </Navbar.Section>
      <Divider my={8}></Divider>
      <Navbar.Section>
        <Box className="flex flex-col">{links}</Box>
      </Navbar.Section>
    </Navbar>
  )
}
