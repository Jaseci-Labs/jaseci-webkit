import { ActionIcon, Box, Stack, Tooltip } from '@mantine/core'
import { Browser, VectorTriangle } from 'tabler-icons-react'

const EditorActionBar = () => {
    return (
        <Box sx={{ height: "100vh", background: "#202327", width: 48 }}>
            <Stack align="center" py="md" sx={{ color: "#9c9692" }}>
                <Tooltip label="Views" position='right' withArrow>
                    <ActionIcon>
                        <Browser size={32}></Browser>
                    </ActionIcon>
                </Tooltip>

                {/* graphs */}
                <Tooltip label="Graphs" position='right' withArrow>
                    <ActionIcon>
                        <VectorTriangle size={32}></VectorTriangle>
                    </ActionIcon>
                </Tooltip>
            </Stack>
        </Box>
    )
}

export default EditorActionBar